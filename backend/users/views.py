# from django.shortcuts import render
# from .models import CustomUser
# from causes.models import Cause
# from django.shortcuts import get_object_or_404
# from django.contrib.auth.decorators import login_required
# from django.contrib.auth import get_user_model

# User = get_user_model()

# # Create your views here.

# # @login_required
# def favourite_list(request):
#     fList = Cause.favourites.filter(favourites=request.user)

#     return


# # @login_required
# def favourite_add(request, id):
#     cause = get_object_or_404(Cause, id=id)
#     # inside favourites, checks if user has already favourited
#     if cause.favourites.filter(id=request.user.id).exists():
#         cause.favourites.remove(request.user)
#     else:
#         cause.favourites.add(request.user)
#     return
