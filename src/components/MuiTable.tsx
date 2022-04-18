import React from 'react'
import { TableContainer, Table, Paper, TableRow, TableCell, TableHead, TableBody } from '@mui/material'

const MuiTable = () => {
  return (
    <TableContainer component={Paper} sx={{ maxHeight: '300px' }}> 
        <Table aria-label="simple data table" stickyHeader>
            <TableHead>
                <TableRow>
                    <TableCell>Id</TableCell>
                    <TableCell>First Name</TableCell>
                    <TableCell>Last Name</TableCell>
                    <TableCell align='center'>Email</TableCell>
                </TableRow>
            </TableHead>
            <TableBody>
                {
                    tableData.map(data => (
                        <TableRow key={data.id}
                            sx={{'&:last-child td, &:last-child th': { border: 0 }}}
                        >
                            <TableCell>{data.id}</TableCell>
                            <TableCell>{data.first_name}</TableCell>
                            <TableCell>{data.last_name}</TableCell>
                            <TableCell align='center'>{data.email}</TableCell>
                        </TableRow>
                    ))
                }
            </TableBody>
        </Table>
    </TableContainer>
  )
}

const tableData = [{
  "id": 1,
  "first_name": "Ichabod",
  "last_name": "Parsley",
  "email": "iparsley0@scientificamerican.com"
}, {
  "id": 2,
  "first_name": "Tildi",
  "last_name": "Pidgin",
  "email": "tpidgin1@yahoo.co.jp"
}, {
  "id": 3,
  "first_name": "Rubi",
  "last_name": "Bollard",
  "email": "rbollard2@si.edu"
}, {
  "id": 4,
  "first_name": "Spike",
  "last_name": "Gill",
  "email": "sgill3@360.cn"
}, {
  "id": 5,
  "first_name": "Margaretha",
  "last_name": "Kedwell",
  "email": "mkedwell4@barnesandnoble.com"
}, {
  "id": 6,
  "first_name": "Gennie",
  "last_name": "Prue",
  "email": "gprue5@phoca.cz"
}, {
  "id": 7,
  "first_name": "Renie",
  "last_name": "Baldock",
  "email": "rbaldock6@netvibes.com"
}, {
  "id": 8,
  "first_name": "Gaynor",
  "last_name": "Plumptre",
  "email": "gplumptre7@google.de"
}, {
  "id": 9,
  "first_name": "Bree",
  "last_name": "Shurmore",
  "email": "bshurmore8@google.es"
}, {
  "id": 10,
  "first_name": "Kaylee",
  "last_name": "Swafford",
  "email": "kswafford9@thetimes.co.uk"
}];

export default MuiTable