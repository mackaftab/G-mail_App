import { List, ListItem, Paper } from '@mui/material'
import React, { useEffect, useState } from 'react';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import RefreshIcon from '@mui/icons-material/Refresh';
import { collection, deleteDoc, doc, getDocs } from 'firebase/firestore';
import { auth, database } from '../firebase/setup';
import DeleteIcon from '@mui/icons-material/Delete';

function Middle(props) {

    const [mailData,setMailData] = useState([])
    

    const deleteMail = async (data) =>{
        const userDoc = doc(database, "Users", `${auth.currentUser?.email}`);
        const messageDoc = doc(userDoc, "Inbox",`${data.id}`)
        try {
            await deleteDoc(messageDoc)

        } catch (err) {
            console.error(err);
        }
    }

    const getMail = async () => {
        const userDoc = doc(database, "Users", `${auth.currentUser?.email}`);
        const messageDoc = collection(userDoc, `${props.subCollect ? props.subCollect : "Inbox"}`)
        try {
            const data = await getDocs(messageDoc);
            const filteredData = data.docs.map((doc) => ({
                ...doc.data(),
                id: doc.id
            }))

            setMailData(filteredData)
        } catch (err) {
            console.error(err)
        }
    }


    useEffect(() => {
        getMail()
    }, [props.subCollect])


    return (
        <div style={{ marginLeft: "2.9vw", marginTop: "1vw", width: "75vw", paddingTop: "6vw" }}>

            <RefreshIcon style={{ marginLeft: "1.5vw", marginTop: "2vw" }} />

            {props.search ? mailData.filter((data) => data.sender === props.search).map((data) => {
                return <>
                    <Paper   elevation={0} style={{ backgroundColor: "#F6FBFF", borderTop: "1px solid lightgrey", borderBottom: "1px solid #EFEFEF" }}>

                        <ListItem>
                            <StarBorderIcon />
                            <span  style={{ fontSize: "1.3vw", marginLeft: "1.2vw", fontWeight: "500" }}>{data.sender}</span><span style={{ marginLeft: "12vw", fontWeight: "200" }}>{data.email}</span>
                            
                      
                            <DeleteIcon onClick={()=>deleteMail(data)} style={{cursor:"pointer" }}/>
                   

                        </ListItem>

                    </Paper>
                </>
            })
            
            : mailData.map((data) => {
                return <>
                    <Paper  elevation={0} style={{ backgroundColor: "#F6FBFF", borderTop: "1px solid lightgrey", borderBottom: "1px solid #EFEFEF" }}>

                        <ListItem>
                            <StarBorderIcon />
                            <span  style={{ fontSize: "1.3vw", marginLeft: "1.2vw", fontWeight: "500" }}>{data.sender}</span><span style={{ marginLeft: "12vw", fontWeight: "200" }}>{data.email}</span>

                          <DeleteIcon  onClick={()=>deleteMail(data)} style={{cursor:"pointer"}}/>
                           
                        </ListItem>

                    </Paper>
                </>
            })}





            <h6 style={{ fontWeight: "400", marginLeft: "28vw" }}>Terms - Privacy - Program Policies</h6>

        </div>
    )
}

export default Middle
