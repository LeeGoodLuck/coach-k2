var prefix = "/coach/coach";
$(function () {
    load();
});

function load() {
    $('#exampleTable')
        .bootstrapTable(
            {
                method: 'get', // 服务器数据的请求方式 get or post
                url: prefix + "/coachListRanking", // 服务器数据的加载地址
                // showRefresh : true,
                // showToggle : true,
                // showColumns : true,
                iconSize: 'outline',
                toolbar: '#exampleToolbar',
                smartDisplay:false,
                striped: true, // 设置为true会有隔行变色效果
                dataType: "json", // 服务器返回的数据类型
                pagination: false, // 设置为true会在底部显示分页条
                // queryParamsType : "limit",
                // //设置为limit则会发送符合RESTFull格式的参数
                singleSelect: false, // 设置为true将禁止多选
                // contentType : "application/x-www-form-urlencoded",
                // //发送到服务器的数据编码类型
                pageSize: 10, // 如果设置了分页，每页数据条数
                pageNumber: 1, // 如果设置了分布，首页页码
                // search : true, // 是否显示搜索框
                showColumns: false, // 是否显示内容下拉框（选择显示的列）
                sidePagination: "server", // 设置在哪里进行分页，可选值为"client" 或者
                columns: [
                    {
                        field: 'coachId',
                        title: 'id',
                        align: 'center',
                        valign: 'center',
                    },
                    {
                        field: 'coachName',
                        title: '教练名称',
                        valign: 'center',
                    },
                    {
                        field: 'orderId',
                        title: '订单ID',
                        valign: 'center',
                    },
                    {
                        field: 'createTime',
                        title: '时间',
                        valign: 'center',
                    },
                    {
                        field: 'coachMoney',
                        title: '总收益',
                        valign: 'center',
                    }]
            });
}


function reLoad(params) {
    layer.open({
        type: 2,
        title: '排行榜查询',
        maxmin: true,
        shadeClose: true, // 点击遮罩关闭层
        area: ['800px', '90%'],
        content: prefix + '/timeRankingTypeId/' + params // iframe的url
    });
}



