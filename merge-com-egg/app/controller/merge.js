'use strict';

const Controller = require('egg').Controller;

class MergeController extends Controller {
  async index() {
    const { ctx } = this;
    ctx.body = await ctx.service.merge.findAll( ctx );
  }
  async show() {
    const { ctx } = this;
    const id = ctx.params.id;
    ctx.body = await ctx.service.merge.find( id );
  }
}

module.exports = MergeController;
