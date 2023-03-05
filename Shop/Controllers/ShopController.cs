using Microsoft.AspNetCore.Mvc;
using Shop.Models;

namespace Shop.Controllers
{
    [ApiController]
    [Route("[controller]/[action]")]
    public class ShopController : ControllerBase
    {
        private static readonly Phone[] Data = TestData.GetAllPhone().ToArray();

        [HttpGet]
        public IEnumerable<Phone> Get()
        {
            return Data;
        }
        [HttpGet]
        public Phone GetPhoneById([FromQuery] Guid id)
        {
            return Data.Where(x=>x.Id==id).First();
        }
        [HttpGet]
        public IEnumerable<Phone> Search([FromQuery]string? str)
        {
            return Data.Where(x => x.Name.Contains(str??""));
        }
    }
}