using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace DSRawool.Data.Migrations
{
    public partial class BlogUserTableRelationsAdded : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DeleteData(
                table: "AspNetRoles",
                keyColumn: "Id",
                keyValue: "9c34c5fa-96ae-465f-8790-1b09e67a283c");

            migrationBuilder.DeleteData(
                table: "AspNetRoles",
                keyColumn: "Id",
                keyValue: "9ca6a180-2874-4aea-b345-e699de249bec");

            migrationBuilder.AlterColumn<string>(
                name: "CreatedBy",
                schema: "dsrawool",
                table: "BlogComment",
                type: "text",
                nullable: true,
                oldClrType: typeof(int),
                oldType: "integer");

            migrationBuilder.AlterColumn<string>(
                name: "CreatedBy",
                schema: "dsrawool",
                table: "Blog",
                type: "text",
                nullable: true,
                oldClrType: typeof(int),
                oldType: "integer",
                oldNullable: true);

            migrationBuilder.InsertData(
                table: "AspNetRoles",
                columns: new[] { "Id", "ConcurrencyStamp", "Name", "NormalizedName" },
                values: new object[,]
                {
                    { "06fdd0f2-289b-4dee-b74c-146318de1db2", "d180ae80-99bd-4c1e-9fd3-f2a783e9804b", "Administrator", "ADMINISTRATOR" },
                    { "6c71e091-2fba-48b2-a801-5b56d4b1352f", "74c2d525-f7aa-4fcd-bf0b-de23958a0e5c", "Viewer", "VIEWER" }
                });

            migrationBuilder.CreateIndex(
                name: "IX_BlogComment_CreatedBy",
                schema: "dsrawool",
                table: "BlogComment",
                column: "CreatedBy");

            migrationBuilder.CreateIndex(
                name: "IX_Blog_CreatedBy",
                schema: "dsrawool",
                table: "Blog",
                column: "CreatedBy");

            migrationBuilder.AddForeignKey(
                name: "FK_Blog_AspNetUsers_CreatedBy",
                schema: "dsrawool",
                table: "Blog",
                column: "CreatedBy",
                principalTable: "AspNetUsers",
                principalColumn: "Id");

            migrationBuilder.AddForeignKey(
                name: "FK_BlogComment_AspNetUsers_CreatedBy",
                schema: "dsrawool",
                table: "BlogComment",
                column: "CreatedBy",
                principalTable: "AspNetUsers",
                principalColumn: "Id");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Blog_AspNetUsers_CreatedBy",
                schema: "dsrawool",
                table: "Blog");

            migrationBuilder.DropForeignKey(
                name: "FK_BlogComment_AspNetUsers_CreatedBy",
                schema: "dsrawool",
                table: "BlogComment");

            migrationBuilder.DropIndex(
                name: "IX_BlogComment_CreatedBy",
                schema: "dsrawool",
                table: "BlogComment");

            migrationBuilder.DropIndex(
                name: "IX_Blog_CreatedBy",
                schema: "dsrawool",
                table: "Blog");

            migrationBuilder.DeleteData(
                table: "AspNetRoles",
                keyColumn: "Id",
                keyValue: "06fdd0f2-289b-4dee-b74c-146318de1db2");

            migrationBuilder.DeleteData(
                table: "AspNetRoles",
                keyColumn: "Id",
                keyValue: "6c71e091-2fba-48b2-a801-5b56d4b1352f");

            migrationBuilder.AlterColumn<int>(
                name: "CreatedBy",
                schema: "dsrawool",
                table: "BlogComment",
                type: "integer",
                nullable: false,
                defaultValue: 0,
                oldClrType: typeof(string),
                oldType: "text",
                oldNullable: true);

            migrationBuilder.AlterColumn<int>(
                name: "CreatedBy",
                schema: "dsrawool",
                table: "Blog",
                type: "integer",
                nullable: true,
                oldClrType: typeof(string),
                oldType: "text",
                oldNullable: true);

            migrationBuilder.InsertData(
                table: "AspNetRoles",
                columns: new[] { "Id", "ConcurrencyStamp", "Name", "NormalizedName" },
                values: new object[,]
                {
                    { "9c34c5fa-96ae-465f-8790-1b09e67a283c", "1b9a7de7-4d49-4322-bcf1-06d2932d4f17", "Viewer", "VIEWER" },
                    { "9ca6a180-2874-4aea-b345-e699de249bec", "b8475ce0-dbe8-4627-8ed1-12cd652d5deb", "Administrator", "ADMINISTRATOR" }
                });
        }
    }
}
