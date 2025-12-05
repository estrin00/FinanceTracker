import { useState } from "react";
import axios from "axios";

function AddTransactionForm(){
    const[title, setTitle] = useState("");
    const[amount,setAmount] = useState("");
    const[category, setCategory] = useState("");
    const[date,setDate] = useState("");
    
    const handleSubmit = async(e: React.FormEvent) => {
        e.preventDefault();

        try{
            await axios.post("http://127.0.0.1:8000/transactions",{
                title,
                amount: parseFloat(amount),
                category,
                date,
            });

            setTitle("");
            setAmount("");
            setCategory("");
            setDate("");
            alert("Transakcija dodana!");

        }catch(error){
            console.error("Error while adding: ",error)
        }
    };

    return(
        <form onSubmit={handleSubmit}>
            <input placeholder="Title" value={title} onChange={(e) => setTitle(e.target.value)}/>
            <input placeholder="Amount" value={amount} onChange={(e) => setAmount(e.target.value)}/>
            <input placeholder="Category" value={category} onChange={(e) => setCategory(e.target.value)}/>
            <input placeholder ="Date" value={date} onChange={(e)=>setDate(e.target.value)}/>
            <button type="submit">Add Transaction</button>
        </form>
    );
}

export default AddTransactionForm;