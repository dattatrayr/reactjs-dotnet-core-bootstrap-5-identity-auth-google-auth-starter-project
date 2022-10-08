using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace DSRawool.Data.Migrations
{
    public partial class CorrectedUserFirstNameColumn : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DeleteData(
                table: "AspNetRoles",
                keyColumn: "Id",
                keyValue: "06fdd0f2-289b-4dee-b74c-146318de1db2");

            migrationBuilder.DeleteData(
                table: "AspNetRoles",
                keyColumn: "Id",
                keyValue: "6c71e091-2fba-48b2-a801-5b56d4b1352f");

            migrationBuilder.RenameColumn(
                name: "FristName",
                table: "AspNetUsers",
                newName: "FirstName");

            migrationBuilder.InsertData(
                table: "AspNetRoles",
                columns: new[] { "Id", "ConcurrencyStamp", "Name", "NormalizedName" },
                values: new object[,]
                {
                    { "13c4110f-e15e-4d13-98aa-11ccd417edff", "220962d1-faaa-4640-a239-7a3b150712d6", "Administrator", "ADMINISTRATOR" },
                    { "af2e96db-e7be-4398-aad2-e81fd1541bdf", "37ff995c-c4db-46b3-915b-3ae8cecdb12f", "Viewer", "VIEWER" }
                });
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DeleteData(
                table: "AspNetRoles",
                keyColumn: "Id",
                keyValue: "13c4110f-e15e-4d13-98aa-11ccd417edff");

            migrationBuilder.DeleteData(
                table: "AspNetRoles",
                keyColumn: "Id",
                keyValue: "af2e96db-e7be-4398-aad2-e81fd1541bdf");

            migrationBuilder.RenameColumn(
                name: "FirstName",
                table: "AspNetUsers",
                newName: "FristName");

            migrationBuilder.InsertData(
                table: "AspNetRoles",
                columns: new[] { "Id", "ConcurrencyStamp", "Name", "NormalizedName" },
                values: new object[,]
                {
                    { "06fdd0f2-289b-4dee-b74c-146318de1db2", "d180ae80-99bd-4c1e-9fd3-f2a783e9804b", "Administrator", "ADMINISTRATOR" },
                    { "6c71e091-2fba-48b2-a801-5b56d4b1352f", "74c2d525-f7aa-4fcd-bf0b-de23958a0e5c", "Viewer", "VIEWER" }
                });
        }
    }
}
