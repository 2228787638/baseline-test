'use strict';

function collectSameElements(collectionA, collectionB) {
  var collection=new Array();
  for(int i=0;i<collectionA.length;i++){
      for(int j=0;j<collectionB.length;j++){
        if(collectionA[i]==collectionB[j]){
          collection.push(collectionA[i]);
        }
      }
  }
  return collection;
}
