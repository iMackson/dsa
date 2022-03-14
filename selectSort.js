class SelectSort {
    static sort (arrays) {
        var len = arrays.length - 1;
        var minIndex; // Save th index of the selected minimum

        for (var i = 0; i < len; i++) {
            minIndex = i;

            // Save the minimum value of each loop as the first element
            var minValue = arrays[minIndex];
            for (var j = i; j < len; j++) {
                // Compare with each element if it is less than the minimum value, exchange the minIndex
                if (minValue > arrays[j + 1]) {
                    minValue = arrays[j + 1];
                    minIndex = j + 1;
                }
            }
            // if the minimum index changes, the current minimum is exchanged with the minIndex
            if (i != minIndex) {
                var temp = arrays[i];
                arrays[i] = arrays[minIndex];
                arrays[minIndex] = temp;
            }
        }
    }
}

var scores = [89,56, 23, 65, 76, 66]
SelectSort.sort(scores);
for (var i = 0; i < scores.length; i++) {
    document.write(scores[i] + ",")
}







