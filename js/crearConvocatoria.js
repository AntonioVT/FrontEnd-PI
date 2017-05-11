
        // Ordenar por "Estado" las convocatorias
        $(document).ready(function(){
            $('#listaParticipantesTable').DataTable( {
                "columnDefs": [
                    { "orderable": false, "targets": 0 }
                ],
                "aaSorting": [],
                "order": [[ 4, "des" ]]
            });
        });

        var flag = false;
        var disableDates = [];

        Date.prototype.addDays = function(days) {
            var dat = new Date(this.valueOf());
            dat.setDate(dat.getDate() + days);
            return dat;
        }

        function inBetweenDates(dates){

            $('#datepicker').multiDatesPicker('resetDates', 'disabled');
            disableDates = [];
            

            if (dates.length == 2 && !flag){
                startDate = new Date(dates[0]);
                endDate   = new Date(dates[1]);

                var diff = Math.ceil(Math.abs(endDate - startDate) / 86400000);
                //console.log(diff);

                for (var i = 1; i < diff; i++){
                    disableDates.push(startDate.addDays(i));
                }
                flag = false;
            }

            if (dates.length > 1){
                flag = true;
            }

  
        }

        function printDates(date) {
            
            var dates = $('#datepicker').multiDatesPicker('getDates');


            //inBetweenDates(dates);
            

            if (disableDates.length > 0){
                    $('#datepicker').multiDatesPicker({
                        onSelect: function (date) { printDates(date); },
                        addDisabledDates: disableDates,
                        minDate: 0
                    });
            }
            
            resetDateInputs(dates);
        }

        function resetDateInputs(dates){
            // Inputs IDs
            var dateInputs = ['#fechaI', '#fechaF', '#fechaV'];

            // Reset inputs
            for (var i = 0; i < dateInputs.length; i++){
                $(dateInputs[i]).val("");
            }

            // New value to inputs
            for (var i = 0; i < dates.length; i++){
                $(dateInputs[i]).val(dates[i]);
            }
        }

        // InitDatePicker
        $(function () {
            $('#datepicker').multiDatesPicker({
                onSelect: function (date) { printDates(date); },
                pickableRange: 730,
                maxPicks: 3,
                minDate: 0
            });
        });

        // IMG
        function uploadImage() {
            var x = document.getElementById("upImage").click();
        }