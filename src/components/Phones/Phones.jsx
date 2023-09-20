import axios from "axios";
import { useEffect, useState } from "react";
import { BarChart,Bar, XAxis, YAxis, Tooltip} from 'recharts';

const Phones = () => {
    const [phones, setPhones] = useState([]);
    useEffect(() => {
        // fetch('https://openapi.programming-hero.com/api/phones?search=iphone')
        // .then(res => res.json())
        // .then(data => console.log(data.data))

        axios.get('https://openapi.programming-hero.com/api/phones?search=iphone')
        .then(data => {
            const phonesData = data.data.data;
            const phonesWidthFakeData = phonesData.map(phone =>{
                const obj ={
                    name: phone.phone_name,
                    price: parseInt(phone.slug.split("-")[1])
                }
                return obj;
            })
            setPhones(phonesWidthFakeData);
        })
        
    },[])

    return (
        <div className="mb-20">
            <h2 className="text-4xl font-bold text-pink-800 mb-10">Phones: {phones.length}</h2>
            <BarChart width={1200} height={400} data={phones}>
                <Bar dataKey="price" fill="#9333ea" />
                <XAxis dataKey="name" />
                <YAxis/>
                <Tooltip/>
            </BarChart>
        </div>
    );
};

export default Phones;