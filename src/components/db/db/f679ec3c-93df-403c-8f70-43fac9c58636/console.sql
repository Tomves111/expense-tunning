SELECT invoice_items.InvoiceLineId,
       tracks.TrackId
FROM invoice_items
         INNER JOIN tracks
                    ON invoice_items.InvoiceLineId = tracks.AlbumId
WHERE InvoiceLineId
          BETWEEN 1
          AND 99
    AND InvoiceLineId > 1
   OR InvoiceLineId < 99
ORDER BY InvoiceLineId