function processBoxShadow(
  rawBoxShadows,
) {
  const result = [];
  if (rawBoxShadows == null) {
    return result;
  }

  const boxShadowList =
    typeof rawBoxShadows === 'string'
      ? parseBoxShadowString(rawBoxShadows)
      : rawBoxShadows;

  for (const rawBoxShadow of boxShadowList) {
    const parsedBoxShadow = {
      offsetX: 0,
      offsetY: 0,
    };

    let value;
    for (const arg in rawBoxShadow) {
      switch (arg) {
        case 'offsetX':
          value =
            typeof rawBoxShadow.offsetX === 'string'
              ? parseLength(rawBoxShadow.offsetX)
              : rawBoxShadow.offsetX;
          if (value == null) {
            return [];
          }

          parsedBoxShadow.offsetX = value;
          break;
        case 'offsetY':
          value =
            typeof rawBoxShadow.offsetY === 'string'
              ? parseLength(rawBoxShadow.offsetY)
              : rawBoxShadow.offsetY;
          if (value == null) {
            return [];
          }

          parsedBoxShadow.offsetY = value;
          break;
        case 'spreadDistance':
          value =
            typeof rawBoxShadow.spreadDistance === 'string'
              ? parseLength(rawBoxShadow.spreadDistance)
              : rawBoxShadow.spreadDistance;
          if (value == null) {
            return [];
          }

          parsedBoxShadow.spreadDistance = value;
          break;
        case 'blurRadius':
          value =
            typeof rawBoxShadow.blurRadius === 'string'
              ? parseLength(rawBoxShadow.blurRadius)
              : rawBoxShadow.blurRadius;
          if (value == null || value < 0) {
            return [];
          }

          parsedBoxShadow.blurRadius = value;
          break;
        case 'color':
          const color = processColor(rawBoxShadow.color);
          if (color == null) {
            return [];
          }

          parsedBoxShadow.color = color;
          break;
        case 'inset':
          parsedBoxShadow.inset = rawBoxShadow.inset;
      }
    }
    result.push(parsedBoxShadow);
  }
  return result;
}

function parseBoxShadowString(
  rawBoxShadows,
) {
  let result = [];

  for (const rawBoxShadow of rawBoxShadows
    .split(/,(?![^()]*\))/) // split by comma that is not in parenthesis
    .map(bS => bS.trim())
    .filter(bS => bS !== '')) {
    const boxShadow = {
      offsetX: 0,
      offsetY: 0,
    };
    let offsetX;
    let offsetY;
    let keywordDetectedAfterLength = false;

    let lengthCount = 0;

    // split rawBoxShadow string by all whitespaces that are not in parenthesis
    const args = rawBoxShadow.split(/\s+(?![^(]*\))/);
    for (const arg of args) {
      const processedColor = processColor(arg);
      if (processedColor != null) {
        if (boxShadow.color != null) {
          return [];
        }
        if (offsetX != null) {
          keywordDetectedAfterLength = true;
        }
        boxShadow.color = arg;
        continue;
      }

      if (arg === 'inset') {
        if (boxShadow.inset != null) {
          return [];
        }
        if (offsetX != null) {
          keywordDetectedAfterLength = true;
        }
        boxShadow.inset = true;
        continue;
      }

      switch (lengthCount) {
        case 0:
          offsetX = arg;
          lengthCount++;
          break;
        case 1:
          if (keywordDetectedAfterLength) {
            return [];
          }
          offsetY = arg;
          lengthCount++;
          break;
        case 2:
          if (keywordDetectedAfterLength) {
            return [];
          }
          boxShadow.blurRadius = arg;
          lengthCount++;
          break;
        case 3:
          if (keywordDetectedAfterLength) {
            return [];
          }
          boxShadow.spreadDistance = arg;
          lengthCount++;
          break;
        default:
          return [];
      }
    }

    if (offsetX == null || offsetY == null) {
      return [];
    }

    boxShadow.offsetX = offsetX;
    boxShadow.offsetY = offsetY;

    result.push(boxShadow);
  }
  return result;
}