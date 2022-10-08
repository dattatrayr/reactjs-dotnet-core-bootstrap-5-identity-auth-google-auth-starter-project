using AutoMapper;
using DSRawool.Data.DataTransferObjects;
using DSRawool.Data.Entities;

namespace DSRawool.AutoMapperProfiles
{
    public class MappingProfile : Profile
    {
        public MappingProfile()
        {
            CreateMap<UserForRegistrationDto, User>()
                .ForMember(u => u.UserName, opt => opt.MapFrom(x => x.Email));
        }
    }
}
