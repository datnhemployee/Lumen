#!/bin/sh
NAME=""
IS_UPDATE=false

red='\033[0;31m'
clear='\033[0m'


while getopts "n:u:" opt
do
   case "$opt" in
      n ) NAME="$OPTARG" ;;
      u ) IS_UPDATE="$OPTARG" ;;
   esac
done

echo "ℹ️  NAME=$NAME"
echo "ℹ️  IS_UPDATE=$IS_UPDATE"

if [ -z "$NAME" ]
  then
    echo "\n${red} ⛔️ Error: Option '--name' is required to test. ${clear}\n";
    exit 0;
fi


folderDriver=$(cat './js2flow.config.json' | jq -r ".driver.\"$NAME\"");
pathToJs2FlowConfigDriver="$folderDriver/js2flow.config.json"


exportFlowchartOfConfig () {
   pathToSource=$(cat "$1" | jq -r ".source");
   echo "\n 🍎 Exporting ... $pathToSource"
   node $JS2FLOW --source="$pathToSource" --driver="$2";
}

exportFlowchartForDriver () {
   exportFlowchartOfConfig $pathToJs2FlowConfigDriver $folderDriver
}

exportFlowchartForStubs () {
   stubsLength=$(cat "$pathToJs2FlowConfigDriver" | jq -r ".stubs | length"); 
   for (( i = 0; i < stubsLength; i++ ))
   do 
      (folderStub=$(cat "$pathToJs2FlowConfigDriver" | jq -r ".stubs | .[$i]");
      pathToJs2FlowConfigStub="$folderStub/js2flow.config.json";
      echo "\n 🍎 pathToJs2FlowConfigStub=$pathToJs2FlowConfigStub";

      exportFlowchartOfConfig $pathToJs2FlowConfigStub $folderStub;) &
   done; 
}

exportFlowchartForDriverAndStubs () {
   exportFlowchartForDriver &
   exportFlowchartForStubs;
}



# 1. test -------
# 1.1. export flowchart of driver & stubs (level 1)
# 1.2. export report after run test-stubs-changes & run test-driver-changes 
# 1.3. Run driver & export report | --dest
# -- Becareful, loop stub!
# 1.4. [optional] Would you like to run stubs' test ? --force-run-stubs-test --stub-level 1 
main () {
   echo "\n 🌈 Start main ..."
   # exportFlowchartForDriverAndStubs;
   
   echo "\n ⛸️  2. Running jest ...\n"
   jest --name="$NAME"
}

main;

wait

# js2flow 
# jest --forceExit -u $IS_UPDATE --driver-name "$NAME"


# 2. update expected driver & stubs -------
# 2.1. write another shell script