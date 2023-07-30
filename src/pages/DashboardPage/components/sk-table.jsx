import { Button } from "@/components/ui/button";
import { Table, TableCell, TableHead, TableRow } from "@/components/ui/table";
import React from "react";

const SKTable = ({ postedData }) => {
  return (
    <Table>
      <TableRow>
        <TableHead>SK Type</TableHead>
        <TableHead>Nama</TableHead>
        <TableHead>NIK</TableHead>
        <TableHead>TTL</TableHead>
        <TableHead>Agama</TableHead>
        <TableHead>Bekerja</TableHead>
        <TableHead>Alamat</TableHead>
        <TableHead>Action</TableHead>
      </TableRow>
      {postedData.map((data, index) => (
        <TableRow key={index}>
          <TableCell>{data[0]}</TableCell>
          <TableCell>{data[3].nama}</TableCell>
          <TableCell>{data[3].nik}</TableCell>
          <TableCell>{data[3].ttl}</TableCell>
          <TableCell>{data[3].agama}</TableCell>
          <TableCell>{data[3].bekerja}</TableCell>
          <TableCell>{data[3].alamat}</TableCell>
          <TableCell>
            <Button
              variant="secondary"
              data-id={index}
              data-sktype={data[0]}
              data-nama={data[3].nama}
              data-nik={data[3].nik}
              data-ttl={data[3].ttl}
              data-agama={data[3].agama}
              data-bekerja={data[3].bekerja}
              data-alamat={data[3].alamat}
              data-datetime={data[1]}
            >
              Accept Data & Print
            </Button>
            <Button variant="secondary" data-id={index} data-notelp={data[2]}>
              Reject
            </Button>
            <Button variant="secondary" data-id={index} data-notelp={data[2]}>
              Done
            </Button>
          </TableCell>
        </TableRow>
      ))}
    </Table>
  );
};

export default SKTable;
