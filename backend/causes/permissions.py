# causes/permissions.py
from rest_framework import permissions


class IsFounderOrReadOnly(permissions.BasePermission):

    def has_object_permission(self, request, view, obj):

        # Read-only permissions are allowed for any request
        if request.method in permissions.SAFE_METHODS:
            return True
    # Write permissions are only allowed to the founder of a cause
        return obj.founder == request.user
