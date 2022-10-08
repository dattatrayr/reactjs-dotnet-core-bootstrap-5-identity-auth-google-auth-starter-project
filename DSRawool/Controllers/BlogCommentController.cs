using DSRawool.Services;
using Microsoft.AspNetCore.Mvc;

namespace DSRawool.Controllers
{
    [ApiController]
    [Route("api/BlogComment")]
    public class BlogCommentController : ControllerBase
    {
        IBlogCommentService _BlogCommentService;
        public BlogCommentController(IBlogCommentService BlogCommentService)
        {
            _BlogCommentService = BlogCommentService;
        }

        [HttpGet("{id}")]
        public async Task<IActionResult> GetBlogComments(string id)
        {
            return Ok(await _BlogCommentService.GetCommentsAsync(Convert.ToInt32(id)));
        }
    }
}
