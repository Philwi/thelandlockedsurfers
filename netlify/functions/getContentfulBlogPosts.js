import { getBlogPostsFromContentful } from '../../src/plugins/contentful'

exports.handler = async function (event, context, callback) {
  const entryObject = await getBlogPostsFromContentful()
  let returnObject = { message: '', statusCode: 200, body: {} }
  if (!!entryObject) {
    returnObject['message'] = 'OK'
    returnObject['body'] = JSON.stringify(entryObject)
  } else {
    returnObject['message'] = 'BAD REQUEST'
    returnObject['statusCode'] = 400
  }

  return returnObject
}
