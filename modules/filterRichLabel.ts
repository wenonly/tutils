/**
 * 去掉富文本中的html标签
 */
function filterRichLabel(schemeIntroduce: string) {
  schemeIntroduce = schemeIntroduce.replace(/(\n)/g, ""); // 去掉换行
  schemeIntroduce = schemeIntroduce.replace(/(\t)/g, ""); // 去掉换行
  schemeIntroduce = schemeIntroduce.replace(/(\r)/g, "");
  schemeIntroduce = schemeIntroduce.replace(/<\/?[^>]*>/g, ""); // 去掉标签
  schemeIntroduce = schemeIntroduce.replace(/\s*/g, "");
  schemeIntroduce = schemeIntroduce.replace(/ /gi, " "); // 去掉
  schemeIntroduce = schemeIntroduce.replace(/&nbsp;/gi, ""); // 去掉
  return schemeIntroduce;
}

export default filterRichLabel