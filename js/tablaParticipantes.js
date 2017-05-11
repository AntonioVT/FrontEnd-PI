$(document).ready(function(){
    var stockTable = $('#listaParticipantesTable').DataTable( {
        "columnDefs": [
            { "orderable": false, "targets": 0 }
        ],
        "aaSorting": [],
        "order": [[ 2, "asc" ]]
    });
 
    stockTable.on('click', 'tbody tr' ,function() {
        var $row = $(this);
        var addRow = stockTable.row($row);
        catalogTable.row.add(addRow.data()).draw();
        addRow.remove().draw();
    });

    var catalogTable = $('#listaParticipantesTable2').DataTable( {
        "columnDefs": [
            { "orderable": false, "targets": 0 }
        ],
        "aaSorting": [],
        "order": [[ 2, "asc" ]]
    });

    catalogTable.on('click', 'tbody tr' ,function() {
        var $row = $(this);
        var addRow = catalogTable.row($row);
        stockTable.row.add(addRow.data()).draw();
        addRow.remove().draw();
    });
} );

