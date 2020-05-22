package com.bootdo.coach.controller;


import com.alibaba.fastjson.JSONObject;
import com.bootdo.coach.api.wx.Result;
import com.bootdo.coach.api.wx.ResultUtil;
import com.bootdo.common.controller.BaseController;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

@RequestMapping("/overallEvaluation")
@RestController
public class DeviceBasicController {


    @RequestMapping("evaluation")
    public Result evaluation(String evaluationJson, String device_no) {
        System.out.println("接收的参数-=========：" + evaluationJson);
        System.out.println("接收的参数========：" + device_no);
        JSONObject jsonObject = JSONObject.parseObject(evaluationJson);
        System.out.println("接收的参数json格式：" + jsonObject);
        return ResultUtil.success(jsonObject);
    }
}
