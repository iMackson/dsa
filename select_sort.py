class SelectSort:

    def sort(self, array):
        for i in range(0, len(array)-1):
            min_index = i
            min_value = array[min_index]
            for j in range(i, len(array)-1):
                if (min_value > array[j + 1]):
                    min_value = array[j+1]
                    min_index = j + 1
            
            if i is not min_index:
                temp = array[i]
                array[i] = array[min_index]
                array[min_index] = temp


scores = [89,56, 23, 65, 76, 66]
select = SelectSort()
print(select.sort(scores))