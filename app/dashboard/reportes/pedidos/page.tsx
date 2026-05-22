"use client";

import { Button } from "@heroui/react";
import pdfMake from "pdfmake/build/pdfmake";
import pdfFonts from "pdfmake/build/vfs_fonts";
import type { TDocumentDefinitions } from "pdfmake/interfaces";

(pdfMake as any).vfs = pdfFonts.vfs;

export default function OTPage() {
  const generarPDF = () => {
    const documentDefinition: TDocumentDefinitions = {
      pageSize: "A4",

      pageMargins: [25, 40, 25, 40],

      content: [
        // HEADER
        {
          text: "ORDEN DE TRABAJO",
          style: "title",
          alignment: "center",
        },

        {
          text: "EMPRESA DE TRANSPORTES PERU BUS S.A",
          alignment: "center",
          margin: [0, 0, 0, 20],
        },

        // DATOS PRINCIPALES
        {
          table: {
            widths: ["25%", "25%", "25%", "25%"],
            body: [
              [
                { text: "NRO OT", style: "tableHeader" },
                "837842",
                { text: "PLACA", style: "tableHeader" },
                "Y2N-962",
              ],
              [
                { text: "EQUIPO", style: "tableHeader" },
                "SCANIA K360",
                { text: "KM", style: "tableHeader" },
                "1045036",
              ],
              [
                { text: "CONDUCTOR", style: "tableHeader" },
                "CCEVASCO",
                { text: "TALLER", style: "tableHeader" },
                "TALLER ICA",
              ],
            ],
          },

          margin: [0, 0, 0, 20],
        },

        // MOTIVO
        {
          text: "MOTIVO",
          style: "sectionTitle",
        },

        {
          text: "SACAR MUESTRA DE ACEITE DE MOTOR 12500 KM",
          margin: [0, 0, 0, 20],
        },

        // TAREAS
        {
          text: "TAREAS",
          style: "sectionTitle",
        },

        {
          table: {
            headerRows: 1,
            widths: ["*", "*", 80],

            body: [
              [
                { text: "TAREA", style: "tableHeader" },
                { text: "ACTIVIDAD", style: "tableHeader" },
                { text: "TIEMPO", style: "tableHeader" },
              ],

              ["MUESTREAR ACEITE", "ACEITE DE MOTOR", "30 MIN"],
            ],
          },

          margin: [0, 0, 0, 20],
        },

        // PERSONAL
        {
          text: "PERSONAL TÉCNICO",
          style: "sectionTitle",
        },

        {
          table: {
            headerRows: 1,
            widths: ["*", "*", "*", "*"],

            body: [
              [
                { text: "PUESTO", style: "tableHeader" },
                { text: "TRABAJADOR", style: "tableHeader" },
                { text: "INICIO", style: "tableHeader" },
                { text: "FIN", style: "tableHeader" },
              ],

              ["TÉCNICO MECÁNICO", "ROJAS SOTO, DANNY", "08:00", "08:30"],
            ],
          },

          margin: [0, 0, 0, 30],
        },

        // FIRMAS
        {
          columns: [
            {
              width: "*",
              stack: [
                {
                  text: "_____________________",
                  alignment: "center",
                },
                {
                  text: "Firma del Solicitante",
                  alignment: "center",
                },
              ],
            },

            {
              width: "*",
              stack: [
                {
                  text: "_____________________",
                  alignment: "center",
                },
                {
                  text: "Firma Responsable",
                  alignment: "center",
                },
              ],
            },
          ],
        },
      ],

      styles: {
        title: {
          fontSize: 18,
          bold: true,
        },

        sectionTitle: {
          fontSize: 13,
          bold: true,
          margin: [0, 10, 0, 8],
        },

        tableHeader: {
          bold: true,
          fillColor: "#e5e7eb",
        },
      },
    };

    pdfMake.createPdf(documentDefinition).open();
  };

  return (
    <div className="flex flex-col gap-4">
      <h1 className="text-2xl font-bold">Reporte OT</h1>

      <Button color="primary" onPress={generarPDF}>
        Generar PDF
      </Button>
    </div>
  );
}
