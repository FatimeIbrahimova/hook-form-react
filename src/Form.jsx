import { Button, Checkbox, FormControl, FormControlLabel, FormGroup, InputLabel, MenuItem, Select, TextField } from '@mui/material'
import React, { useState } from 'react'
import { useForm } from 'react-hook-form';
import { yupResolver } from "@hookform/resolvers/yup";
import { loginFormSchema } from './schema/formSchema';
import axios from 'axios';

const Form = () => {
    const [data, setData] = useState({ name: "", unitPrice: 0, unitsInStock: 0, quantityPerUnit: 0, discounted: false,categories:""})
    const [category,setCategory]=useState([])
    const getData = async (e) => {
        e.preventDefault()
        const response = await fetch("https://northwind.vercel.app/api/categories").then((res) => res.json());
        setCategory(response.data)
      }
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({
        resolver: yupResolver(loginFormSchema),
    });

    function handleChange(e) {
        setData({
            ...data, [e.target.name]: e.target.value
        });
    }
    const formSubmit = () => {
        const URL = "https://northwind.vercel.app/api/products"
        axios.post(URL, data)
    };

    return (
        <div style={{ display: 'flex', flexDirection: "column", alignItems: "center", marginTop: 50 }}>
            <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
                <InputLabel id="demo-select-small">categories</InputLabel>
                <Select
                    labelId="demo-select-small"
                    id="demo-select-small"
                    value={category}
                    label="Categories"
                    onChange={handleChange}
                    name="categories"
                    onClick={getData}
                >
                    {category.map((item)=>{
                        return <MenuItem value="">
                        <em>{item.name}</em>
                    </MenuItem>
                    })
                    }

                    
                </Select>
            </FormControl>
            <TextField id="outlined-basic" label="Name" variant="outlined" style={{ marginBottom: 10 }} {...register("name")} name="name" onChange={(e) => handleChange(e)} />
            {errors.name ? (
                <span style={{ color: "red" }}>{errors.name.message}</span>
            ) : (
                <></>
            )}
            <TextField id="outlined-basic" label="unit price" variant="outlined" style={{ marginBottom: 10 }} {...register("unitPrice")} name="unitPrice" onChange={(e) => handleChange(e)} />
            {errors.unitPrice ? (
                <span style={{ color: "red" }}>{errors.unitPrice.message}</span>
            ) : (
                <></>
            )}
            <TextField id="outlined-basic" label="units in stock" variant="outlined" style={{ marginBottom: 10 }} {...register("unitsInStock")} name="unitsInStock" onChange={(e) => handleChange(e)} />
            {errors.unitsInStock ? (
                <span style={{ color: "red" }}>{errors.unitsInStock.message}</span>
            ) : (
                <></>
            )}
            <TextField id="outlined-basic" label="Quantity per Unit" variant="outlined" style={{ marginBottom: 10 }} {...register("quantityPerUnit")} name="quantityPerUnit" onChange={(e) => handleChange(e)} />
            {errors.quantityPerUnit ? (
                <span style={{ color: "red" }}>{errors.quantityPerUnit.message}</span>
            ) : (
                <></>
            )}
            <FormGroup>
                <FormControlLabel control={<Checkbox onClick={(e) => handleChange(e)} />} label="is Discounted" name="discounted" />
            </FormGroup>
            <Button variant='contained' onClick={handleSubmit(formSubmit)}>ADD PRODUCT TO API</Button>
        </div>
    )
}

export default Form
