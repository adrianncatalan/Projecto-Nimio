import { useEffect, useState } from "react"

export const useNewProject = () => {

    const [selected, setSelected] = useState();
    const [customers, setCustomers] = useState([]);

    const getCustomers = async () => {
        await fetch('http://127.0.0.1:8000/api/customers', {
            headers: {
                'Content-Type': 'application/json'
            }
        }).then(response => response.json()
        .then(async retrieved => {
            setCustomers(await retrieved['hydra:member']);
        }));
    }

    // const addCustomer = () => fetch('http://127.0.0.1:8000/api/customers', {
    //         headers: {
    //             'Content-Type': 'application/json'
    //         },
    //         method: 'POST',
    //         body: JSON.stringify({
    //             name: 'sadasdassadas'
    //         }, null, 2)
    //     }).then(response => response.json()
    //     .then(async retrieved => {}))
    //     .catch(error => console.error(error))

    useEffect(() => {
        getCustomers();

        return () => setCustomers([]);
    }, [])

    return {
        selected,
        setSelected,
        customers,
        // addCustomer
    }
}
