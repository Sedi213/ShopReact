namespace Shop.Models
{
    public static class TestData
    {
        public static IEnumerable<Phone> GetAllPhone()
        {
            return new List<Phone>
            {
                new Phone
                {
                    Id=Guid.NewGuid(),
                    Name="Redmi",
                    ImgUrl="https://content.rozetka.com.ua/goods/images/original/272741489.jpg",
                    Description="Lorem30",
                    Price=12503
                },
                new Phone{
                    Id=Guid.NewGuid(),
                    Name="Apple",
                    ImgUrl="https://content.rozetka.com.ua/goods/images/original/272741489.jpg",
                    Description="Lorem30",
                    Price=15
                },
                new Phone{
                    Id=Guid.NewGuid(),
                    Name="Google Pixel",
                    ImgUrl="https://content.rozetka.com.ua/goods/images/original/272741489.jpg",
                    Description="Lorem30",
                    Price=12534
                },
                new Phone{
                    Id=Guid.NewGuid(),
                    Name="LinuxPhone",
                    ImgUrl="https://content.rozetka.com.ua/goods/images/original/272741489.jpg",
                    Description="Lorem30",
                    Price=1205
                },
                new Phone{
                    Id=Guid.NewGuid(),
                    Name="Nokia",
                    ImgUrl="https://content.rozetka.com.ua/goods/images/original/272741489.jpg  ",
                    Description="Lorem30",
                    Price=14
                }
            };
        }
    }
}
