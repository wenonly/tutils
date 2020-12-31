import { filterRichLabel } from "../modules/index";

test("clone 执行", function () {
    const str: string = `<p class="ql-align-justify">之前有不少用户反馈称，购买了M1 Apple Silicon的Mac新设备后，在尝试还原计算机时遇到了一个尴尬的问题，其会无法正常工作，并弹出“在准备更新时发生了一个错误，个性化软件更新失败，请重新尝试”的提示。</p><p class="ql-align-justify"><br></p><p class="ql-align-justify">当时这些中招的用户向苹果反馈后，被告知目前并没有好的办法解决，而一些用户只能通过间接相同设备的互导更新。</p><p class="ql-align-justify"><br></p><img class="cu-img" src="http://ticket2020.oss-cn-shanghai.aliyuncs.com/1606099281043.jpg?width=1920&amp;height=1080"><p><br></p><p class="ql-align-justify">或许是经过了今天的研究后，现在苹果方面终于出手，并给出了解决此问题方法，官方描述的该问题是：升级到macOS Big Sur 11.0.1之前擦除/恢复Mac，问题就会出现，无法从macOS Recovery重新安装macOS。</p><p class="ql-align-justify">苹果建议用户可以使用另一台Mac创建一个可启动的安装程序，用户可使用Terminal将M1 Mac恢复到功能状态。</p>`
    const result = filterRichLabel(str)
    expect(result).toBe(`之前有不少用户反馈称，购买了M1AppleSilicon的Mac新设备后，在尝试还原计算机时遇到了一个尴尬的问题，其会无法正常工作，并弹出“在准备更新时发生了一个错误，个性化软件更新失败，请重新尝试”的提示。当时这些中招的用户向苹果反馈后，被告知目前并没有好的办法解决，而一些用户只能通过间接相同设备的互导更新。或许是经过了今天的研究后，现在苹果方面终于出手，并给出了解决此问题方法，官方描述的该问题是：升级到macOSBigSur11.0.1之前擦除/恢复Mac，问题就会出现，无法从macOSRecovery重新安装macOS。苹果建议用户可以使用另一台Mac创建一个可启动的安装程序，用户可使用Terminal将M1Mac恢复到功能状态。`)
});
