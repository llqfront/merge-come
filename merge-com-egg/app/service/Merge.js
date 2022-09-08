'use strict';
const Service = require('egg').Service;
class MergeService extends Service {
  async find( _id ) {
    const data = await this.app.mysql.get('db2').get('lianxi', { id: _id });
    return {
        code:200,
        msg:'查询成功',
        test:'demo',
        data:data
    }
  }
  async findAll(ctx){
    const {
      page = 1,
      page_size = 10
    } = ctx.query;
    const query = {
      offset: ctx.helper.toInt(page) * ctx.helper.toInt(page_size) - ctx.helper.toInt(page_size),
      limit: ctx.helper.toInt(page_size),
    };
    const data = await this.app.mysql.get('db2').select('lianxi',query);
    return {
        code:200,
        msg:'查询成功',
        data:data
    }
  }
}
module.exports = MergeService;
