var prefix = "/coach/order";
$(function() {
	load();
});

function load() {
	$('#exampleTable')
			.bootstrapTable(
					{
						method : 'get', // 服务器数据的请求方式 get or post
						url : prefix + "/orderList", // 服务器数据的加载地址
						// showRefresh : true,
						// showToggle : true,
						// showColumns : true,
						iconSize : 'outline',
						toolbar : '#exampleToolbar',
						striped : true, // 设置为true会有隔行变色效果
						dataType : "json", // 服务器返回的数据类型
						pagination : true, // 设置为true会在底部显示分页条
						// queryParamsType : "limit",
						// //设置为limit则会发送符合RESTFull格式的参数
						singleSelect : false, // 设置为true将禁止多选
						// contentType : "application/x-www-form-urlencoded",
						// //发送到服务器的数据编码类型
						pageSize : 10, // 如果设置了分页，每页数据条数
						pageNumber : 1, // 如果设置了分布，首页页码
						// search : true, // 是否显示搜索框
						showColumns : false, // 是否显示内容下拉框（选择显示的列）
						sidePagination : "server", // 设置在哪里进行分页，可选值为"client" 或者
                        showFooter:true,
						// "server"
						queryParams : function(params) {
							return {
		                        // 说明：传入后台的参数包括offset开始索引，limit步长，sort排序列，order：desc或者,以及所有列的键值对
		                        limit: params.limit,
		                        offset: params.offset,
								payTimeBig: $('#payTimeBig').val(),
								payTimeSmall: $('#payTimeSmall').val(),
								coachName: $('#coachName').val(),
		                        studentName: $('#searchName').val()
		                    };
						},
		                
		                
						// //请求服务器数据时，你可以通过重写参数的方式添加一些额外的参数，例如 toolbar 中的参数 如果
						// queryParamsType = 'limit' ,返回参数必须包含
						// limit, offset, search, sort, order 否则, 需要包含:
						// pageSize, pageNumber, searchText, sortName,
						// sortOrder.
						// 返回false将会终止请求
						columns : [
							{
								field : 'orderId',
								title : 'id',
								align : 'center',
		                        valign : 'center',
							},
							{
								field : 'testId',
								title : '考试ID',
								valign : 'center',
							},
							{
								field : 'studentName',
								title : '学员名称',
								valign : 'center',
							},
							{
								field : 'testMoney',
								title : '支付金额',
								valign : 'center',
                                footerFormatter: function (value) {
                                    var count = 0;
                                    for (var i in value) {
                                        if(value[i].separateMoney !=null){
                                            count += value[i].separateMoney;
                                        }
                                    }
                                    return "有效课销小计："+ count.toFixed(2);//保留两位小数
                                }
							},
							{
								field : 'payTime',
								title : '支付时间',
								valign : 'center',
							},
                            {
                                field : 'coachName',
                                title : '教练',
                                valign : 'center',
                            },
							{
								field : 'coachMoney',
								title : '教练分成',
								valign : 'center',
							},
							{
								field : 'agent1Money',
								title : '一级代理分成',
								valign : 'center',
							},
							{
								field : 'agent2Money',
								title : '二级代理分成',
								valign : 'center',
							},
							{
								field : 'agent3Money',
								title : '三级代理商分成',
								valign : 'center',
							},
							{
								field : 'operatorMoney',
								title : '运营商分成',
								valign : 'center',
							}]
					});
}
function reLoad() {
	$('#exampleTable').bootstrapTable('refresh');
}
