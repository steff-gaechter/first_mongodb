export function add(x: number, y: number): number {
    return x+y;
}
export function day1part1(): void {
    const day_1: number[] = [1977,1802,1856,1309,2003,1854,1898,1862,1857,542,1616,1599,1628,1511,1848,1623,1959,1693,1444,1211,1551,1399,1855,1538,1869,1664,1719,1241,1875,1733,1547,1813,1531,1773,624,1336,1897,1179,1258,1205,1727,1364,1957,540,1970,1273,1621,1964,1723,1699,1847,1249,1254,1644,1449,1794,1797,1713,1534,1202,1951,1598,1926,1865,1294,1893,1641,1325,1432,1960,413,1517,1724,1715,1458,1775,1317,1694,1484,1840,1999,1811,1578,1658,1906,1481,1313,1997,1339,1592,1971,1453,1706,1884,1956,1384,1579,1689,1726,1217,1796,1536,1213,1867,1304,2010,1503,1665,1361,814,2007,1430,1625,1958,860,1799,1942,1876,1772,1198,1221,1814,1826,1667,1334,1504,1420,1164,1414,1934,1823,1507,1195,21,1752,1472,1196,1558,1322,1927,1556,1922,277,1828,1883,1280,1947,1231,1915,1235,1961,1494,1324,2009,1367,1545,1736,1575,1214,1704,1833,1663,1474,1894,1754,1564,1321,1119,1975,1987,1873,1834,1686,1574,1505,1656,1688,1896,1982,1554,1990,1902,1859,1293,1739,1282,1889,1981,1283,1687,1220,1443,1409,1252,1506,1742,1319,1882,951,1849];
    const day_1_subtracted: number[] = [];
    let two_values: number = 1;
    const two_values_list: number[] = [];
    day_1.forEach((value: number, index: number): void => {
        day_1_subtracted[index] = 2020 - value;
    });
    day_1_subtracted.forEach((value: number): void => {
        two_values = day_1.find(element => element === value);
        if(two_values !== undefined) {
            console.log(two_values);
            two_values_list.push(two_values);
        }
    });
    console.log(two_values_list[0] * two_values_list[1]);
}
export function day1part2(array: number[], sum: number): void {
    const array_size: number = array.length
    for (let i: number = 0; i < array_size - 2; i++) {
        for (let x: number = i + 1; x < array_size - 1; x++) {
            for (let y: number = x + 1; y < array_size; y++) {
                if (array[i] + array[x] + array[y] == sum) {
                    console.log(array[i]);
                    console.log(array[x]);
                    console.log(array[y]);
                    console.log(sum);
                    console.log(array[i] * array[x] * array[y]);
                }
            }
        }
    }
}