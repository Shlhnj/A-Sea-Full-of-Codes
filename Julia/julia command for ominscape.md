1. Setting up
-------------------------
```julia
cd("D:/Julia-1.6.3/bin") #Change_directory
pwd() #Cek_present_working_directory
; #Enter_shell_mode
julia -t 4 #Set_Number_of_thread_(Cpu_core);
```
-------------------------

2. Check threads(Optional)
---------------------
```julia
Threads.nthreads() #Cek_number_of_threads
Threads.threadid()
```
--------------------

3. Run omniscape
-----------------------------------------
```julia
using Pkg; Pkg.add(["Omniscape", "Rasters", "Plots"]) #Install_library

using Omniscape, Rasters, Plots #Use_library

cd("C:/Users/Eiser/Downloads") #change_directory_to_.ini_file

run_omniscape("C:/Users/Eiser/Downloads/gas_bismillah3.ini") #Run_.ini_file
```
--------------------------------------------

