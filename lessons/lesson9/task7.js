  function compareObjects(obj1, obj2) {
      // put your code here
      let valuesObj1 = Object.values(obj1);
      let valuesObj2 = Object.values(obj2);
      let keysObj1 = Object.keys(obj1);
      let keysObj2 = Object.keys(obj2);

      let result = true;

      if (valuesObj1.length !== valuesObj2.length) {
          result = false;
      }


      valuesObj1.forEach((item, index) => {
          if (item !== valuesObj2[index]) {
              result = false;
          }
      });
      keysObj1.forEach((item, index) => {
          if (item !== keysObj2[index]) {
              result = false;
          }
      });
      console.log(result);
      return result;
  }

  // examples
  const obj1 = {
      name: "Tom",
      age: 17,
  };

  const obj2 = {
      name: "Bob",
      age: 17,
  };

  const obj3 = {
      name: "Bob",
      age: 17,
      student: false,
  };

  const obj4 = {
      name: "Tom",
      age: 17,
  };

  compareObjects(obj1, obj2); // ==> false
  compareObjects(obj2, obj3); // ==> false
  compareObjects(obj1, obj4); // ==> true