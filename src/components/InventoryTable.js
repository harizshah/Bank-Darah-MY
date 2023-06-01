import React from 'react'
import {getDateFormat} from "../utils/helpers";
import {SetLoading} from "../redux/loadersSlice";
import {GetInventoryWithFilters} from "../apicalls/inventory";
import {Table, message} from "antd";
import { useDispatch } from 'react-redux';

function InventoryTable({filters, userType, limit}) {
    const [data, setData] = React.useState([]);
    const [open, setOpen] = React.useState(false);
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
                if(userType === "organization"){
                    return record.inventoryType === 'in' ? record.donor?.name : record.hospital?.hospitalName
                }
            },
        },
        {
            title: "Date",
            dataIndex: "createdAt",
            render : (text) => getDateFormat(text)
        },
    ];

    //change columns for hospital or donor
    if (userType !== "organization") {

        //remove inventory type column
        columns.splice(0,1);

        //change reference column
        columns[2].title = "Organization Name";

        // date column should be rename taken date
        columns[3].title = userType === "hospital" ? "Taken Date" : "Donated Date";
    }


    const getData = async () => {
        try{
            dispatch(SetLoading(true));
            const response = await GetInventoryWithFilters(filters, limit);
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
        <div>
            <Table columns={columns} dataSource={data}
                   className="mt-3"
            />
        </div>
    )
}

export default InventoryTable;