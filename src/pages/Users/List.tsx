import DataTable from "../../components/DataTable"
import { GridColDef, GridRenderCellParams, GridValueGetterParams } from '@mui/x-data-grid';
import { Stack, IconButton } from '@mui/material';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';

export default function List() {
    const onCall = (params: GridRenderCellParams) => {
        //Chamada via WhatsApp
    }
    
    const onEdit = (params: GridRenderCellParams) => {
        //Edição de usuário
    }
    
    const onDelete = (params: GridRenderCellParams) => {
        //Exclusão de usuário
    }

    const columns: GridColDef[] = [
        { field: 'id', headerName: 'ID', width: 70 },
    
        {
            field: 'firstName',
            headerName: 'First name',
            valueGetter: (params: GridValueGetterParams) =>
                `${params.row.fullName.split(" ")?.shift() || ""}`,
        },
        {
            field: 'lastName',
            headerName: 'Sobrenome',
            valueGetter: (params: GridValueGetterParams) =>
                `${params.row.fullName.split(" ")?.pop() || ""}`,
        },
        {
            field: 'document', headerName: 'CPF', width: 150
        },
        {
            field: 'age',
            headerName: 'Age',
            type: 'number',
            valueGetter: (params: GridValueGetterParams) =>
                params.row.birthDate &&
                `${new Date().getFullYear() - new Date(params.row.birthDate).getFullYear()
                }`,
        },
        {
            field: 'email', headerName: 'E-mail', minWidth: 200
        },
        {
            field: 'mobile', headerName: 'Celular', minWidth: 180
        },
        {
            field: 'actions',
            headerName: 'Açoes',
            minWidth: 150,
            renderCell: (params) => (
                <Stack direction="row" spacing={2}>
                    <IconButton color='success' size='small' onClick={() => onCall(params)}>
                        <WhatsAppIcon fontSize='inherit' />
                    </IconButton>
    
                    <IconButton color='info' size='small' onClick={() => onEdit(params)}>
                        <EditIcon fontSize='inherit' />
                    </IconButton>
    
                    <IconButton color='error' size='small' onClick={() => onDelete(params)}>
                        <DeleteIcon fontSize='inherit' />
                    </IconButton>
                </Stack>
            ),
        },
    ];

    const users = [
        {
            id: "1",
            fullName: "Rogério Saraceni",
            document: "000.000.000-00",
            birthDate: new Date(1975, 10, 1),
            email: "rsaraceni@gmail.com",
            emailVerified: true,
            modile: "(11) 99999-9999",
            zipCode: "00000-000",
            addressName: "Rua Teste",
            number: '123',
            complement: "",
            neighborhood: "Bairro Teste",
            city: "São Paulo",
            state: "SP",
        },
    ]

    return <DataTable columns={columns} rows={users} />
}
