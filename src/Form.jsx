import { Button, Checkbox, FormControlLabel, FormGroup, TextField } from '@mui/material'
import React from 'react'

const Form = () => {
    return (
        <div style={{display:'flex',flexDirection:"column",width:300}}>
            <TextField id="outlined-basic" label="Categories" variant="outlined"/>
            <TextField id="outlined-basic" label="Name" variant="outlined" />
            <TextField id="outlined-basic" label="unit price" variant="outlined" />
            <TextField id="outlined-basic" label="units in stock" variant="outlined" />
            <TextField id="outlined-basic" label="Quantity per Unit" variant="outlined" />
            <FormGroup>
                <FormControlLabel control={<Checkbox defaultChecked />} label="is Discounted" />    
            </FormGroup>
            <Button variant='contained'>ADD PRODUCT TO API</Button>
        </div>
    )
}

export default Form
