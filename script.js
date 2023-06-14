function appendToResult(value) {
    document.getElementById('result').value += value;
  }
  
  function clearResult() {
    document.getElementById('result').value = '';
  }
  
  function deleteLastEntry() {
    var currentValue = document.getElementById('result').value;
    document.getElementById('result').value = currentValue.slice(0, -1);
    
  }
  
  function calculateResult() {
    var result = document.getElementById('result').value;
    
    try {
      var evaluatedResult = eval(result);
      document.getElementById('result').value = evaluatedResult;
    } catch (error) {
      document.getElementById('result').value = 'Error';
    }
  }
  