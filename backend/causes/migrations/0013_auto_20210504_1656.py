# Generated by Django 3.1.7 on 2021-05-04 15:56

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('causes', '0012_auto_20210504_1652'),
    ]

    operations = [
        migrations.AlterField(
            model_name='cause',
            name='image',
            field=models.ImageField(default='cause_pics/hands-money.png', upload_to='cause_pics'),
        ),
    ]