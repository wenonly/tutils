import { dateToString } from "../modules/index";

test("时间转化为字符串", function () {
    const time: number = 1609309244336
    const dateTime: Date = new Date(time)

    let str: string = dateToString(time)
    expect(str).toBe('2020-12-30 14:20:44')

    str = dateToString(time, 'lllYYYYasdMMasddlllHHlsldmmadsflss')
    expect(str).toBe('lll2020asd12as30lll14lsld20adsfl44')
    
    let dateStr: string = dateToString(dateTime)
    expect(dateStr).toBe('2020-12-30 14:20:44')

    dateStr = dateToString(dateTime, 'lllYYYYasdMMasddlllHHlsldmmadsflss')
    expect(dateStr).toBe('lll2020asd12as30lll14lsld20adsfl44')
});
