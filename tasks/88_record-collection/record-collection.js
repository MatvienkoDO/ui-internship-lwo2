/**
 * @description changes value of specified property of specified album
 * @param {number} id id of an album
 * @param {string} prop name of property to change
 * @param {string} value new value of property that is being changed
 * @return {object} collection
 * @example (5439, "artist", "ABBA") -> collection['5439']['artist'] = 'ABBA'
 */
export function updateRecords(id, prop, value) {
  const collection = {
    '2548': {
      'album': 'Slippery When Wet',
      'artist': 'Bon Jovi',
      'tracks': [
        'Let It Rock',
        'You Give Love a Bad Name',
      ],
    },
    '2468': {
      'album': '1999',
      'artist': 'Prince',
      'tracks': [
        '1999',
        'Little Red Corvette',
      ],
    },
    '1245': {
      'artist': 'Robert Palmer',
      'tracks': [],
    },
    '5439': {
      'album': 'ABBA Gold',
    },
  };

  const album = collection[id];
  if (!album) {
    return collection;
  }

  if (!value.length) {
    delete album[prop];
    return collection;
  }

  if (prop === 'tracks') {
    if (!album[prop]) {
      album[prop] = [];
    }

    album[prop].push(value);
  } else {
    album[prop] = value;
  }

  return collection;
}
