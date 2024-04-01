import React from 'react'
import { Grid, Typography, Button, Dialog, DialogTitle, DialogContent, DialogContentText, ImageList, ImageListItem, CircularProgress } from '@mui/material';
import { useParams } from 'react-router-dom';


export default function ModalWindow({crew, window, setWindow, setPersonalData, personalData, navigate}) {
  
    return (
    <Dialog open={crew[window] != null ? true : false} onClose={() => {setWindow(-1), setPersonalData(null), navigate("/crew")}}>
        <DialogTitle>
        {crew[window].name}
        </DialogTitle>
        <DialogContent>
        <DialogContentText id="alert-dialog-description">
            <ImageList sx={{ width: 500, height: 450 }} cols={3} rowHeight={164}>
                {
                personalData ? personalData.links.flickr.original.map((elem) => 
                    {
                    return <ImageListItem>
                        <img src={elem} alt="" />
                    </ImageListItem>
                    }
                )
                :
                <CircularProgress />
                }
            </ImageList>
        </DialogContentText>
        </DialogContent>
    </Dialog>
  )
}
