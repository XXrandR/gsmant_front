"use client";
import { Button } from "@heroui/react";
import pdfMake from "pdfmake/build/pdfmake";
import pdfFonts from "pdfmake/build/vfs_fonts";
import type { TDocumentDefinitions } from "pdfmake/interfaces";
(pdfMake as any).vfs = pdfFonts.vfs;
export default function PedidosPage() {
  const generarPDF = () => {
    const documentDefinition: TDocumentDefinitions = {
      content: [
        { text: "REPORTE DE PEDIDOS", style: "header" },
        { text: "Sistema GSMANT", margin: [0, 10, 0, 20] },
        {
          table: {
            headerRows: 1,
            widths: ["*", "*", "*", "*"],
            body: [
              ["Pedido", "Cliente", "Estado", "Total"],
              ["PED-001", "PERUBUS", "APROBADO", "S/ 1200"],
              ["PED-002", "SOYUZ", "PENDIENTE", "S/ 950"],
              ["PED-003", "CRUZ DEL SUR", "ANULADO", "S/ 400"],
            ],
          },
        },
      ],
      styles: { header: { fontSize: 20, bold: true } },
    };
    pdfMake.createPdf(documentDefinition).open();
  };
  return (
    <div className="flex flex-col gap-4">
      {" "}
      <h1 className="text-2xl font-bold"> Módulo Pedidos </h1>{" "}
      <p className="text-default-500">
        {" "}
        Generación de reportes PDF usando pdfmake.{" "}
      </p>{" "}
      <Button variant="primary" onPress={generarPDF}>
        {" "}
        Generar PDF{" "}
      </Button>{" "}
    </div>
  );
}
