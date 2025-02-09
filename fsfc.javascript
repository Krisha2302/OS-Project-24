<script>
 

    // JavaScript program for implementation of FCFS 

   // scheduling

    

    

   // Function to find the waiting time for all 

  // processes

    function findWaitingTime(processes,n,bt,wt)

    {

        // waiting time for first process is 0 

        wt[0] = 0;

   

        // calculating waiting time 

        for (let i = 1; i < n; i++) {

            wt[i] = bt[i - 1] + wt[i - 1];

        }

    }

     

    function findTurnAroundTime(processes,n,bt,wt,tat)

    {

        // calculating turnaround time by adding 

        // bt[i] + wt[i] 

        for (let i = 0; i < n; i++) {

            tat[i] = bt[i] + wt[i];

        }

    }

     

    function findavgTime(processes,n,bt)

    {

        let wt = new Array(n), tat = new Array(n);

        for(let i=0;i<n;i++)

        {

            wt[i]=0;

            tat[i]=0;

        }

        let total_wt = 0, total_tat = 0;

   

        //Function to find waiting time of all processes 

        findWaitingTime(processes, n, bt, wt);

   

        //Function to find turn around time for all processes 

        findTurnAroundTime(processes, n, bt, wt, tat);

   

        //Display processes along with all details 

        document.write("Processes Burst time Waiting"

                       +" time Turn around time<br>");

   

        // Calculate total waiting time and total turn 

        // around time 

        for (let i = 0; i < n; i++) {

            total_wt = total_wt + wt[i];

            total_tat = total_tat + tat[i];

            document.write("    ", (i + 1)+" ");

            document.write("     "+  bt[i]+" ");

            document.write("     "+ wt[i]);

            document.write("     "+ tat[i]+"<br>");

        }

        let s = total_wt / n;

        let t = Math.floor(total_tat / n);

        document.write("Average waiting time = "+ s);

        document.write("<br>");

        document.write("Average turn around time = ", t+" ");

    }

     

    let processes=[1,2,3];

    let  n = processes.length;

     

    let burst_time=[10,5,8];

    findavgTime(processes, n, burst_time);

     

    

     
</script>
