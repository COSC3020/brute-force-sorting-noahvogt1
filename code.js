function permutationSort(a) {
  let count = 0;

  do {
    count++;
    
    let isSorted = true;
    for (let i = 1; i < a.length; i++) {
      if (a[i] < a[i - 1]) {
        isSorted = false;
        break;
      }
    }
    
    if (isSorted) {
      return count;
    }

    let i = a.length - 2;
    while (i >= 0 && a[i] >= a[i + 1]) {
      i--;
    }

    if (i >= 0) {
      let j = a.length - 1;
      while (a[j] <= a[i]) {
        j--;
      }
      let tmp = a[i];
      a[i] = a[j];
      a[j] = tmp;
    }

    let left = i + 1;
    let right = a.length - 1;
    while (left < right) {
      let tmp = a[left];
      a[left] = a[right];
      a[right] = tmp;
      left++;
      right--;
    }

  } while (true);
}
