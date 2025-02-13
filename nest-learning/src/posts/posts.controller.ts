import { Controller, Get, Post, Body, Query, Param, Put, Delete } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiProperty } from '@nestjs/swagger';
import { query } from 'express';
//Body参数装饰器

//标识创建帖子的数据---类型约束 
class CreatePostDto{
    @ApiProperty({description:'帖子标题'})
    title:string
    @ApiProperty({description:'帖子内容'})
    content:string

}

@Controller('posts')
@ApiTags("帖子")
export class PostsController {
    @Get()
    @ApiOperation({summary:'显示博客列表'})
    index(){
        return[
            {id:1}
        ]
    }


    @Post()
    @ApiOperation({summary:'创建帖子'})
    create(@Body() body: CreatePostDto, @Query() query, @Param() params){

        return{
            success:true,
            body:body,
            query:query,
            params:params
        }
    }

    @Get(':id')
    @ApiOperation({summary:'单个博客详情'})
    detail(@Param('id') id: string){
        return{
            id:id,
            title:'msgs',
        }
    }

    @Put(':id')
    @ApiOperation({summary:'编辑帖子'})
    update(@Param('id') id: string, @Body() body: CreatePostDto){
        //更新数据库
        //成功后的返回值
        return {
            success :true
        }
    }

    @Delete(':id')
    @ApiOperation({summary:'删除帖子'})
    reomve(@Param('id') id: string){
        return {
            success :true
        }
    }
}
