class BubbleSort:
    # def __init__(self, array) -> None:
    #     self.array = array

    def sort(self, array):
        for i in range(len(array)-1):
            for j in range(len(array)-1):
                if (array[j] > array[j+1]):
                    flag = array[j]
                    array[j] = array[j + 1] 
                    array[j + 1] = flag

        return array 


scores = [90, 70, 50, 35, 86, 45]                   
bubble = BubbleSort()
print(bubble.sort(scores))
