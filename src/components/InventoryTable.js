import React from 'react'
import {getDateFormat} from "../utils/helpers";
import {SetLoading} from "../redux/loadersSlice";
import {GetInventory} from "../apicalls/inventory";

function InventoryTable({filters}) {
    const [data, setData] = React.useState([]);
    const [open, setOpen] = useState(false);
    const dispatch = useDispatch();
    const columns = [
        {
            title: "Inventory Type",
            dataIndex: "inventoryType",
            render: (text) => text.toUpperCase()
        },
        {
            title: "Blood Group",
            dataIndex: "bloodGroup",
            render: (text) => text.toUpperCase()
        },
        {
            title: "Quantity",
            dataIndex: "quantity",
            render: (text) => text + " ML"
        },
        {
            title: "Reference",
            dataIndex: "reference",
            render: (text, record) => {
                if(record.inventoryType === "in") {
                    return record.donor.name
                } else {
                    return record.hospital.hospitalName;
                }
            }
        },
        {
            title: "Date",
            dataIndex: "createdAt",
            render : (text) => getDateFormat(text)
        },
    ];

    const getData = async () => {
        try{
            dispatch(SetLoading(true));
            const response = await GetInventory();
            dispatch(SetLoading(false));
            if (response.success) {
                setData(response.data);
            } else {
                throw new Error(response.message);
            }
        } catch (error) {
            message.error(error.message);
            dispatch(SetLoading(false));
        }
    }

    React.useEffect(() => {
        getData();
    }, [])

    return (
        <div>InventoryTable</div>
    )
}

export default InventoryTable;