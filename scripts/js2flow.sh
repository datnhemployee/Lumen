#!/bin/sh
SOURCE="__tests__/suit/utils/size/toSizeWithDelta"
IS_UPDATE_EXPECTED="false"

while getopts "source:u:" opt
do
   case "$opt" in
      source ) SOURCE="$OPTARG" ;;
      u ) IS_UPDATE_EXPECTED="$OPTARG" ;;
   esac
done


node $JS2FLOW --source="$SOURCE" -u "$IS_UPDATE_EXPECTED"