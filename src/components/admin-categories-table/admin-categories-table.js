import React, { forwardRef } from "react"
import MaterialTable from "material-table"
import { AddBox, ArrowDownward, Check, Clear, DeleteOutline, Edit, Search } from "@material-ui/icons"

export default function AdminCategoriesTable() {

    const [state, setState] = React.useState({
        columns: [
            {
                cellStyle: {
                    width: 60 + "px"
                },
                align: "center",
                editComponent: props => (
                    <input
                        type="file"
                        onChange={(e) => window.alert(e.target.value)}
                    />),
                title: "Image", field: "imageUrl",
                render: rowData => <img
                    src={ rowData.imageUrl }
                    style={ { width: 40, borderRadius: "50%" } }
                    onClick={() => window.alert("nvjdkvnkdjvnkjdnvkjdnvjk")}
                />
            },
            { title: "Title", field: "title" }
        ],
        data: [
            { title: "Aircraft", imageUrl: "https://avatars0.githubusercontent.com/u/7895451?s=460&v=4" },
            { title: "Accessorize", imageUrl: "https://avatars0.githubusercontent.com/u/7895451?s=460&v=4" },
            { title: "Review", imageUrl: "https://avatars0.githubusercontent.com/u/7895451?s=460&v=4" }
        ]
    })

    return (
        <MaterialTable
            title="Categories"
            columns={ state.columns }
            data={ state.data }
            options={ {
                actionsColumnIndex: -1,
                paging: state.data.length > 5
            } }
            icons={ {
                Add: forwardRef((props, ref) => <AddBox { ...props } ref={ ref }/>),
                Check: forwardRef((props, ref) => <Check {...props} ref={ref} />),
                Delete: forwardRef((props, ref) => <DeleteOutline { ...props } ref={ ref }/>),
                Edit: forwardRef((props, ref) => <Edit {...props} ref={ref} />),
                Search: forwardRef((props, ref) => <Search {...props} ref={ref} />),
                Clear: forwardRef((props, ref) => <Clear {...props} ref={ref} />),
                ResetSearch: forwardRef((props, ref) => <Clear {...props} ref={ref} />),
                SortArrow: forwardRef((props, ref) => <ArrowDownward {...props} ref={ref} />),
            } }

            editable={ {
                onRowAdd: (newData) =>
                    new Promise((resolve) => {
                        setTimeout(() => {
                            resolve()
                            setState((prevState) => {
                                const data = [...prevState.data]
                                data.push(newData)
                                return { ...prevState, data }
                            })
                        }, 600)
                    }),
                onRowUpdate: (newData, oldData) =>
                    new Promise((resolve) => {
                        setTimeout(() => {
                            resolve()
                            if (oldData) {
                                setState((prevState) => {
                                    const data = [...prevState.data]
                                    data[data.indexOf(oldData)] = newData
                                    return { ...prevState, data }
                                })
                            }
                        }, 600)
                    }),
                onRowDelete: (oldData) =>
                    new Promise((resolve) => {
                        setTimeout(() => {
                            resolve()
                            setState((prevState) => {
                                const data = [...prevState.data]
                                data.splice(data.indexOf(oldData), 1)
                                return { ...prevState, data }
                            })
                        }, 600)
                    })
            } }
        />
    )
}
