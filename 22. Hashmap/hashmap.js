class HashMap {
  constructor(loadFactor = 0.75, capacity = 16) {
    this.loadFactor = loadFactor;
    this.capacity = capacity;
    this.buckets = Array(this.capacity).fill(null);
    this.size = 0;
  }

  hash(key) {
    let hashCode = 0;
    const primeNumber = 31;

    for (let i = 0; i < key.length; i++) {
      hashCode = primeNumber * hashCode + key.charCodeAt(i);
    }

    return hashCode;
  }

  set(key, value) {
    const index = this.hash(key) % this.capacity;

    if (this.buckets[index] === null) {
      this.buckets[index] = [];
    }

    for (let pair of this.buckets[index]) {
      if (pair[0] === key) {
        pair[1] = value;
        return;
      }
    }

    this.buckets[index].push([key, value]);
    this.size++;

    if (this.size / this.capacity > this.loadFactor) {
      this.resize();
    }
  }

  get(key) {
    const index = this.hash(key) % this.capacity;
    const bucket = this.buckets[index];

    if (!bucket) return null;

    for (let pair of bucket) {
      if (pair[0] === key) {
        return pair[1];
      }
    }

    return null;
  }

  has(key) {
    return this.get(key) !== null;
  }

  remove(key) {
    const index = this.hash(key) % this.capacity;
    const bucket = this.buckets[index];

    if (!bucket) return false;

    for (let i = 0; i < bucket.length; i++) {
      if (bucket[i][0] === key) {
        bucket.splice(i, 1);
        this.size--;
        return true;
      }
    }

    return false;
  }

  length() {
    return this.size;
  }

  clear() {
    this.buckets = Array(this.capacity).fill(null);
    this.size = 0;
  }

  keys() {
    const keys = [];

    for (let bucket of this.buckets) {
      if (bucket) {
        for (let pair of bucket) {
          keys.push(pair[0]);
        }
      }
    }

    return keys;
  }

  values() {
    const values = [];

    for (let bucket of this.buckets) {
      if (bucket) {
        for (let pair of bucket) {
          values.push(pair[1]);
        }
      }
    }

    return values;
  }

  entries() {
    const entries = [];

    for (let bucket of this.buckets) {
      if (bucket) {
        for (let pair of bucket) {
          entries.push(pair);
        }
      }
    }

    return entries;
  }

  resize() {
    const oldBuckets = this.buckets;

    this.capacity *= 2;
    this.buckets = Array(this.capacity).fill(null);
    this.size = 0;

    for (let bucket of oldBuckets) {
      if (bucket) {
        for (let pair of bucket) {
          this.set(pair[0], pair[1]);
        }
      }
    }
  }
}

module.exports = HashMap;
