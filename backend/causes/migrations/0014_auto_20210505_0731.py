# Generated by Django 3.1.7 on 2021-05-05 06:31

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('causes', '0013_auto_20210504_1656'),
    ]

    operations = [
        migrations.AlterField(
            model_name='cause',
            name='image',
            field=models.ImageField(default='cause_pics/hands-money.png', upload_to='media/cause_pics'),
        ),
    ]